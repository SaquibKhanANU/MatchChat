import requests
from bs4 import BeautifulSoup
import pandas as pd
import numpy as np
from io import StringIO
import json 
from sqlalchemy import create_engine
from sqlalchemy.exc import IntegrityError
import re
import os

season_urls = {
    'LCK': {
        # 'Spring': { 'Matches': "https://gol.gg/tournament/tournament-matchlist/LCK%20Spring%202024/" },
        'Spring_playoffs': { 'Matches': 'https://gol.gg/tournament/tournament-matchlist/LCK%20Spring%20Playoffs%202024/' } 
        },
    'MSI': {
        'MSI': { 'Matches': 'https://' },
        },
    'WORLDS': {
        'WORLDS': { 'Matches': 'https://' },
        }
    }

headers = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0' }
session = requests.Session()
session.headers.update(headers) 

def parse_link(relative_link):
    domain = "https://gol.gg/"
    return domain + relative_link.lstrip("../")

def fetch_match_links(url, headers=headers): 
    try: 
        with requests.Session() as session:
            response = session.get(url, headers=headers)
            response.raise_for_status() 
            soup = BeautifulSoup(response.content, 'lxml') 
            tables = soup.find_all('table')
            team_table = tables[0] 
            links = team_table.find_all('a', href=True)
            team_links = [] 
            for link in links: 
                href = link['href'].replace(".", "") 
                text = link.get_text(strip=True) 
                team_links.append({'href': "https://gol.gg/" + href, 'text': text}) 
                return team_links 
    except (requests.RequestException, IndexError, ValueError) as e:
        print(f"Error: {e}")
        return None 

def get_match_stats(match_url): 
    try: 
        with requests.Session() as session:
            response = session.get(match_url, headers=headers) 
            response.raise_for_status() 
            soup = BeautifulSoup(response.content, 'lxml')
            divs = soup.find_all('div', class_='col-12 col-sm-6 pb-4') 
            total_data = [] 
            for d in divs: 
                col_cadre_divs = d.find_all('div', class_='col-cadre') 
                data = [] 
                for div in col_cadre_divs:
                    scorebox_spans = div.find_all('span', class_='score-box')
                    for span in scorebox_spans: 
                        image_alt = span.img['alt'] 
                        span_text = span.get_text(strip=True) 
                        data.append((image_alt, span_text)) 
                    total_data.append(data) 
            return total_data 
    except (requests.RequestException, IndexError, ValueError) as e:
        print(f"Error: {e}") 
        return None 

def get_match_bans(match_url):   
    try:       
        with requests.Session() as session:            
            response = session.get(match_url, headers=headers)             
            response.raise_for_status()            
            soup = BeautifulSoup(response.content, 'lxml') 
            col_divs = soup.find_all('div', class_='col-4 col-sm-5 text-center') 
            total_data = [] 
            for div in col_divs: 
                data = []                
                images = div.find_all('img') 
                for img in images: 
                    image_alt = img['src']
                    data.append((image_alt)) 
                    total_data.append(data)
    except (requests.RequestException, IndexError, ValueError) as e:
        print(f"Error: {e}") 
        return None
                                                                                                                
def get_player_data(url):
     try: 
        with requests.Session() as session:
            response = session.get(url, headers=headers) 
            response.raise_for_status()
            soup = BeautifulSoup(response.content, 'lxml')
            tables = soup.find_all('table') 
            df1 = pd.read_html(StringIO(str(tables[0])))[0]
            df2 = pd.read_html(StringIO(str(tables[1])))[0]
            return df1, df2
     except (requests.RequestException, IndexError, ValueError) as e:
         print(f"Error: {e}")
         return None
def get_team_names(url):
    try:
        with requests.Session() as session:
            response = session.get(url, headers=headers)
            response.raise_for_status()
            soup = BeautifulSoup(response.content, 'html.parser')
            div_x_elements = soup.find_all('div', class_='col-4 col-sm-5 text-center')
            data = []
            for div_x in div_x_elements:
                h1_element = div_x.find('h1')
                if h1_element:
                    a_tag = h1_element.find('a')
                    if a_tag:
                        link_text = a_tag.get_text(strip=True)
                        data.append(link_text)
            return data
    except (requests.RequestException, IndexError, ValueError) as e:
        print(f"Error: {e}")
        return None

def get_team_pickbans(url):
    try:
        with requests.Session() as session:
            response = session.get(url, headers=headers)
            response.raise_for_status()
            soup = BeautifulSoup(response.content, 'html.parser')
            div_y_elements = soup.find_all('div', class_='row pb-1')
            game_data = []
            for div_y in div_y_elements:
                total_data = []
                div_x_elements = div_y.find_all('div', class_='col-4 col-sm-5 text-center')
                for div_x in div_x_elements:
                    data = []
                    outcome = div_x.find('h1').get_text(strip=True)
                    data.append(outcome)
                    images = div_x.find_all('img')
                    for img in images:
                        image_alt = img['src']
                        data.append((image_alt))
                    total_data.append(data)
                game_data.append(total_data)
            return game_data
    except (requests.RequestException, IndexError, ValueError) as e:
        print(f"Error: {e}")
        return None

def get_match_timeline(url):
    try:
        with requests.Session() as session:
            response = session.get(url, headers=headers)
            response.raise_for_status()
            soup = BeautifulSoup(response.content, 'html.parser')
            data = []
            div_x_elements = soup.select('div[class*="col-4"][class*="col-sm-2"][class*="text-center"][class*="align-middle"]')
            for div_x in div_x_elements:
                game_length = div_x.find('h1').get_text(strip=True)
                outcome = div_x.find('span').get_text(strip=True)
                data.append([game_length, outcome])
            return data
    except (requests.RequestException, IndexError, ValueError) as e:
        print(f"Error: {e}")
        return None

def parse_pickbans(data):
    status = data[0]
    picks = data[1:6]
    bans = data[6:]
    picks = [parse_link(link) for link in picks]
    bans = [parse_link(link) for link in bans]
    result = {'picks': picks, 'bans': bans}
    return result

def parse_match_stats(match_stats):
    result = {}
    index = 1
    for stat in match_stats:
        result[f'team{index}'] = {stat[i][0]: stat[i][1] for i in range(len(stat))}
        index += 1
    return result

def mine_matches():
    # match_links = fetch_match_links(season_urls[season]['Matches'])
    all_data = {}
    for tournament in season_urls:
        all_data[tournament] = {}
        for season in season_urls[tournament]:
            all_data[tournament][season] = {}
            match_links = fetch_match_links(season_urls[tournament][season]['Matches'])
            if match_links is not None:
                for link in match_links:
                    team_names = get_team_names(link['href'])
                    players = get_player_data(link['href'])
                    match_stats = get_match_stats(link['href'])
                    pickbans = get_team_pickbans(link['href'])
                    time = get_match_timeline(link['href'])
                    all_data[tournament][season][link['text']] = {
                        'num_games': len(time),
                        'team1': team_names[0],
                        'team2': team_names[1],
                        'match_stats': parse_match_stats(match_stats),
                        'player_stats': {
                            'team1': players[0].to_dict(orient='records'),
                            'team2': players[1].to_dict(orient='records')
                        },
                        'games': {
                            f'game{i+1}': {
                                'time': time[i][0],
                                'gold': time[i][1],
                                'team1': parse_pickbans(pickbans[i][0]),
                                'team2': parse_pickbans(pickbans[i][1]),
                            }
                            for i in range(len(pickbans))
                        }
                    }
    return all_data

def main():
    current_directory = os.path.dirname(os.path.abspath(__file__))
    relative_path = "data.json"
    directory_path = os.path.join(current_directory, relative_path)

    data = mine_matches()

    with open(directory_path, 'w') as f:
        json.dump(data, f, indent=4)

main()